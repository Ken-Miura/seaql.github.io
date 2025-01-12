# Chained Relations

The `Related` trait is a representation of the arrows (1-1, 1-N, M-N) we draw on Entity Relationship Diagrams. A [`Linked`](https://docs.rs/sea-orm/*/sea_orm/entity/trait.Linked.html) is composed of a chain of relations, and is useful when:

1. there exist multiple join paths between a pair of entities
1. joining across multiple entities in a relational query

Take [this](https://github.com/SeaQL/sea-orm/blob/master/src/tests_cfg/cake.rs) as a simple example, where we join cake and filling via an intermediate `cake_filling` table.

```rust
#[derive(Debug)]
pub struct CakeToFilling;

impl Linked for CakeToFilling {
    type FromEntity = cake::Entity;

    type ToEntity = filling::Entity;

    fn link(&self) -> Vec<RelationDef> {
        vec![
            cake_filling::Relation::Cake.def().rev(),
            cake_filling::Relation::Filling.def(),
        ]
    }
}
```

Alternatively, the `RelationDef` can be defined on the fly, where the following is equivalent to the above:

```rust
#[derive(Debug)]
pub struct CakeToFilling;

impl Linked for CakeToFilling {
    type FromEntity = cake::Entity;

    type ToEntity = filling::Entity;

    fn link(&self) -> Vec<RelationDef> {
        vec![
            cake_filling::Relation::Cake.def().rev(),
            cake_filling::Entity::belongs_to(filling::Entity)
                .from(cake_filling::Column::FillingId)
                .to(filling::Column::Id)
                .into(),
        ]
    }
}
```

### Lazy Loading

Find fillings that can be filled into a cake with the [`find_linked`](https://docs.rs/sea-orm/*/sea_orm/entity/prelude/trait.ModelTrait.html#method.find_linked) method.

```rust
let cake_model = cake::Model {
    id: 12,
    name: "".to_owned(),
};

assert_eq!(
    cake_model
        .find_linked(cake::CakeToFilling)
        .build(DbBackend::MySql)
        .to_string(),
    [
        r#"SELECT `filling`.`id`, `filling`.`name`"#,
        r#"FROM `filling`"#,
        r#"INNER JOIN `cake_filling` ON `cake_filling`.`filling_id` = `filling`.`id`"#,
        r#"INNER JOIN `cake` ON `cake`.`id` = `cake_filling`.`cake_id`"#,
        r#"WHERE `cake`.`id` = 12"#,
    ]
    .join(" ")
);
```

### Eager Loading

Find all pairs of cake and filling together in a single select with the [`find_also_linked`](https://docs.rs/sea-orm/*/sea_orm/entity/prelude/struct.Select.html#method.find_also_linked) method.

```rust
assert_eq!(
    cake::Entity::find()
        .find_also_linked(cake::CakeToFilling)
        .build(DbBackend::MySql)
        .to_string(),
    [
        "SELECT `cake`.`id` AS `A_id`, `cake`.`name` AS `A_name`,",
        "`filling`.`id` AS `B_id`, `filling`.`name` AS `B_name`",
        "FROM `cake`",
        "LEFT JOIN `cake_filling` ON `cake`.`id` = `cake_filling`.`cake_id`",
        "LEFT JOIN `filling` ON `cake_filling`.`filling_id` = `filling`.`id`",
    ]
    .join(" ")
);
```
