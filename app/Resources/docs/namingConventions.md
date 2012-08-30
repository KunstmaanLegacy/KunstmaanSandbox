# Naming conventions

We made a few naming conventions when working on one of the bundles. It is possible that the conventions aren't followed right now, but we'll fix it when working a specific bundle.

* variables should be camelCase (ex.: $numberOfColumns)
* column names should use underscores (ex.: @ORM\Column(name="number_of_columns"))
* getters and setters should also use camelCase (ex.: getNumberOfColumns(),  setNumberOfColumns())
* foreign keys should allways use the _id suffix (ex.: @ORM\OneToMany(targetEntity="Entity", mappedBy="entity_id"),  @ORM\JoinColumn(name="entity_id", referencedColumnName="id"))
* table names should allways use underscores and be plural (ex.: some_entities)
* class names should use camelCase and be singular (ex.: SomeEntities)