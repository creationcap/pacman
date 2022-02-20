// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010402020202030203020202020204010102030202020303030202020203020101020302020202020202020303030201010203030303020302030203020202010102020202030203020302030302020101020203030302030203020203020201010202030202020302030302030202010102020303030303020203020302020101020202020202030303030203020201010202030303020203020202030202010102020302030303030303030302020101020203020202020202020202020201010202030303030303030303030302010104020202020202020202020203040101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . 2 . . . . . . 2 
2 . 2 . . . 2 2 2 . . . . 2 . 2 
2 . 2 . . . . . . . . 2 2 2 . 2 
2 . 2 2 2 2 . 2 . 2 . 2 . . . 2 
2 . . . . 2 . 2 . 2 . 2 2 . . 2 
2 . . 2 2 2 . 2 . 2 . . 2 . . 2 
2 . . 2 . . . 2 . 2 2 . 2 . . 2 
2 . . 2 2 2 2 2 . . 2 . 2 . . 2 
2 . . . . . . 2 2 2 2 . 2 . . 2 
2 . . 2 2 2 . . 2 . . . 2 . . 2 
2 . . 2 . 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.swamp.swampTile1,sprites.builtin.forestTiles0], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
