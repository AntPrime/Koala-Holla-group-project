CREATE TABLE "koalas" (
"id" serial PRIMARY KEY,
"name" varchar(50) NOT NULL,
"favorite_color" varchar(30),
"age" numeric,
"ready_to_transfer" Boolean,
"notes" varchar(80)
);

INSERT INTO "koalas" ("name", "favorite_color", "age", "ready_to_transfer", "notes")
VALUES;


DELETE FROM koalas WHERE id=$1;
INSERT INTO "koalas" ("name", "favorite_color", "age", "ready_to_transfer", "notes") VALUES ($1, $2, $3, $4, $5 );
SELECT * FROM koalas
UPDATE koalas SET ready_to_transfer=$1 WHERE id=$2;
