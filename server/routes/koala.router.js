const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const pool = require('../modules/pool')

// GET

koalaRouter.get( '/', ( req, res )=>{
    console.log( '/koalas GET' );
    // assemble query
    const queryText = 'SELECT * FROM koalas';
    // run pool.query
    pool.query( queryText).then( ( results )=>{
        // return results.rows
        console.log("results", results.rows)
        res.send( results.rows );
    }).catch( ( err )=>{
        // handle any errors
        console.log( err );
        res.sendStatus( 400 );
    })
})
// POST

koalaRouter.post( '/', ( req, res )=>{
    console.log( 'in /koalas POST:', req.body );
        // assemble query
        const queryText = `INSERT INTO "koalas" ("name", "favorite_color", "age", "ready_to_transfer", "notes") VALUES ($1, $2, $3, $4, $5 );`;
        const values = [ req.body.name, req.body.favorite_color,req.body.age,req.body.ready_to_transfer,req.body.notes ];
        // run pool.query
        pool.query( queryText, values ).then( ( results )=>{
            // return results.rows
            res.sendStatus( 201 ); // "CREATED"
        }).catch( ( err )=>{
            // handle any errors
            console.log( err );
            res.sendStatus( 400 );
        })
})

// PUT
// router.put( '/', ( req, res )=>{
//     console.log( '/artists PUT:', req.body );
//     const queryText = `UPDATE artists SET favorite=$1 WHERE id=$2;`;
//     const values = [ req.body.newFavorite, req.body.id ];
//     // run pool.query
//     pool.query( queryText, values ).then( ( results )=>{
//         res.sendStatus( 200 ); // "OK"
//     }).catch( ( err )=>{
//         // handle any errors
//         console.log( err );
//         res.sendStatus( 400 );
//     })
// // PUT
// // UPDATE artists SET favorite=true WHERE id=5;
// })

// DELETE
koalaRouter.delete( '/', ( req, res )=>{
    console.log( 'in /koalas DELETE:', req.body );
        // assemble query
        const queryText = `DELETE FROM koalas WHERE id=$1;`;
        const values = [ req.body.id ];
        // run pool.query
        pool.query( queryText, values ).then( ( results )=>{
            res.sendStatus( 200 ); // "OK"
        }).catch( ( err )=>{
            // handle any errors
            console.log( err );
            res.sendStatus( 400 );
        })
})

module.exports = koalaRouter;