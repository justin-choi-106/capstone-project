namespace SpriteKind {
    export const EF = SpriteKind.create()
}
let tilemaps = [assets.tilemap`0`, assets.tilemap`1`
    , assets.tilemap`2`,
assets.tilemap`3`]
loadLevel(0)
let ph2 = tiles.getTilesByType(assets.tile`myTile5`)
let cO: boolean = true
const x = 8
const y = 114
let sEF = null
let aliens: EnemySprite[] = [] 
let cEF: boolean = false
const width = 8
let cF: boolean = false
let wall = assets.tile`myTile14`
const monsterMaxSpeed = 100
let gameUpdate = 2000
let ph3 = null
let ph4 = null
let ph1 = null

let maximumProjectiles = 2
let myPlayerSpeed = 100
let monstersSpeed = 50
let herosSpeed = game.askForNumber("hero's speed?")
const limitForProjectiles = game.askForNumber("Limit number of projectiles?")
const projectileScale = game.askForNumber("How big are your projectiles?")

const enemyHP = 1
const playerHP = 5
const stronger = 10
const changeImage = 2
const strongerProjectilePercentage = 25
const powerUps = 2
const normalHitpoints = 1
//const tempo = 140
const heroX = 80
const heroY = 10
const dead = 0
let hero: PlayerSprite = null
let alien: EnemySprite = null  // #3
let alien2: EnemySprite = null 
let currentNumberOfProjectiles = 0
//alien2.follow(hero,50)
let GRAVITY: number = 200  // #4
class ProjectileSprite extends sprites.ExtendableSprite {
    setP(setPositionX: number, setPositionY: number): void {
        this.setPosition(setPositionX, setPositionY)
    }
    speed(vx: number, vy: number): void {
        this.setVelocity(vx, vy)
    }
    scales(howMuch: number): void {
        this.setScale(howMuch)
    }
    sF(flag: SpriteFlag, TorF: boolean): void {
        this.setFlag(flag, TorF)
    }
    delete(effects: effects.ParticleEffect, ms: number): void {
        this.destroy(effects, ms)
    }
    constructor(image: Image, kind: number) {
        super(image, kind)
    }
}
let missile: ProjectileSprite = new ProjectileSprite(assets.image`myImage`,SpriteKind.Projectile)



let JUMP_SPEED = -150
let NUMBER_OF_JUMPS = 2
let COYOTE_SPEED = 50
let current_jump: number = 0
function createHeroSprite(): void {
    hero = new PlayerSprite(assets.image`hero`, SpriteKind.Player)
    hero.set(heroX, heroY)
    hero.move(hero, herosSpeed, 0)
    hero.c(hero)
    hero.ay = GRAVITY
}
game.onUpdate(function () {
 //   alien2.vy = GRAVITY
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        current_jump = 0
        hero.setImage(assets.image`hero`)
    }
})
createHeroSprite()
controller.B
    .onEvent(ControllerButtonEvent.Pressed, function () {
        if (cF) {
            fireProjectile(assets.image`myImage`, hero, SpriteKind.Projectile)
        }
     })
controller.menu.onEvent(ControllerButtonEvent.Pressed, function() {
    playMusic()
})
controller.A
.onEvent(ControllerButtonEvent.Pressed, function () {  // #5
    if (current_jump < NUMBER_OF_JUMPS && hero.vy < COYOTE_SPEED) {  // #10 , #11

        characterAnimations.loopFrames(hero, [assets.image`1`, 
        assets.image`2`,
        assets.image`3`, 
        assets.image`4`, 
        assets.image`5`, 
        assets.image`6`
            , assets.image`7`
        ],
            100, characterAnimations.rule(Predicate.MovingUp))
        characterAnimations.loopFrames(hero, [assets.image`7`, assets.image`6`,
        assets.image`5`,
        assets.image`4`,
        assets.image`3`, assets.image`2`, assets.image`1`
        ],
            100, characterAnimations.rule(Predicate.MovingDown))

        hero.vy = JUMP_SPEED
        current_jump += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function(sprite: PlayerSprite, location: tiles.Location) {
    if (cO) {

    cO = false
    sprites.destroy(missile)
    currentNumberOfProjectiles += 1
    cF = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function(sprite: PlayerSprite, location: tiles.Location) {
    loadLevel(1)

})

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (enemySprite: EnemySprite, playerSprite: PlayerSprite) {
    game.gameOver(false)
 })
// function createEnemies(rows: number, columns: number, spriteImage: Image, Kind: number): void {  // #15
//     for (let i = 0; i < rows; i++) { // #6
//         for (let i2 = 0; i2 < columns; i2++) {
//             alien = new EnemySprite(spriteImage, Kind, normalHitpoints)
//             aliens.push(alien)
//         }
//     }
// }
class EnemySprite extends sprites.ExtendableSprite {
    hitPoints: number
    hit(points: number, effects: effects.ParticleEffect, ms: number): void {
        this.hitPoints -= points

        if (this.hitPoints <= dead) {
            this.destroy(effects, ms)
        }
    }
    delete(effects: effects.ParticleEffect, ms: number): void {
        this.destroy(effects, ms)
    }

    set(setPositionX: number, setPositionY: number): void {
        this.setPosition(setPositionX, setPositionY)
    }

    speed(vx: number, vy: number): void {
        this.setVelocity(vx, vy)
    }
    f(who: Sprite, speed: number): void {
        this.follow(who, speed)
    }
    constructor(image: Image, kind: number, HP: number) {
        super(image, kind)
        this.hitPoints = HP
    }
}
scene.onHitWall(SpriteKind.Player, function(sprite: Sprite, location: tiles.Location) {
    if (hero.tileKindAt(TileDirection.Top || TileDirection.Left || TileDirection.Bottom || TileDirection.Right, wall)) {
        scene.cameraShake(4, 500)
    }
})
    
const tempo = 140
const ph = tiles.getTilesByType(assets.tile`myTile`)
game.splash(" I am a knight and the princess got kidnapped, I have to save her. Let me get my weapon first.")

function phF(tile: Image, array: tiles.Location[], who: Sprite): void {
    for (let i = 0; i < array.length; i++) {  // #7
        tiles.placeOnTile(who, array[i])  // #9
        tiles.setTileAt(array[i], tile)


    }
}
function phFWOSTA(array: tiles.Location[], who: Sprite): void {
    for (let i = 0; i < array.length; i++) {  // #7
        tiles.placeOnTile(who, array[i])  // #9


    }
}
function ph1F(tile: Image, array: tiles.Location[], who: Sprite): void {
    for (let i = 0; i < array.length; i++) {  // #7
        alien = new EnemySprite(assets.image`myImage1`,SpriteKind.Enemy,normalHitpoints)
        tiles.placeOnTile (who, array[i])  // #9
        tiles.setTileAt(array[i], tile)
        aliens.push(alien)
        cEF = true
    }
}
game.onUpdateInterval(3000, function() {
    if (cEF)  {
    for (let i = 0; i < aliens.length; i++) {
        sEF = new ProjectileSprite(assets.image`myImage2`, SpriteKind.EF)
        sEF.setP(aliens[i].x,aliens[i].y)
        sEF.speed(50,0)
        sEF.sF(SpriteFlag.AutoDestroy, true)
    }
    }
})
phF(assets.tile`myTile7`, ph, hero)
phFWOSTA(ph2,missile)
function loadLevel(lvl: number): void { // #1
    tiles.setCurrentTilemap(tilemaps[lvl])

    if (lvl == 0) { 

     }
    else if (lvl == 1) {
        // tiles.setCurrentTilemap(assets.tilemap`2`)
        let ph4 = tiles.getTilesByType(assets.tile`myTile15`)
        let ph1 = tiles.getTilesByType(assets.tile`myTile6`)
        let ph3 = tiles.getTilesByType(assets.tile`myTile10`)
        ph1F(assets.tile`myTile7`,ph1, alien)
        phF(assets.tile`myTile7`,ph4,hero)
        // phF(assets.tile`myTile1`, ph2, hero)
    } else if (lvl == 2) {
    } else {
    }
}

function findLength(musicLength: Number) {
    return musicLength
}
function musicLong(musicLength: Number) {
    let howLong: String = ""
    let long: Number = findLength(musicLength)
    if (long < 5) {
        howLong = "Short " + long
    } else {
        howLong = "Long " + long
    }

    return howLong
}
let myMelody: string[] = [
]
function playMusic(): void {
    let musicLength = game.askForNumber("How long do you want ur music to be?")
    hero.say(musicLong(musicLength))
    if (musicLength == 0) {
        myMelody = [
            "C4:16",
            "C#4:16",
            "D4:16",
            "D#4:16",
            "E4:16",
            "F4:16",
            "F#4:16",
            "G4:16",
            "G#4:16",
            "A4:16",
            "A#4:16",
            "B4:16"]
    } else {
        for (let i = 0; i < musicLength; i++) {
            myMelody[i] = game.askForString("What music notation do you want?")
        }
    }

    for (let i = 0; i < myMelody.length; i++) {
        music.playMelody(myMelody[i], tempo)
    }
}
function fireProjectile(spriteImage: Image, shooter: PlayerSprite, kind: number): void {
    if (currentNumberOfProjectiles < limitForProjectiles) {
        missile = new ProjectileSprite(spriteImage, kind)
        missile.setP(shooter.x, shooter.y)
        animatingMissile()
        missile.sF(SpriteFlag.AutoDestroy, true)
        missile.scales(projectileScale)

        currentNumberOfProjectiles += 1
    }
}

function animatingMissile() {
    if (hero.vx <  0) {
        missile.setVelocity(-175, 0)
        animation.runImageAnimation(
            missile,
            [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . 2 1 1 1 1 3 2 2 . . . . . . 
            . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
            . . 1 1 1 1 1 1 3 3 2 2 . . . . 
            . . 2 1 1 1 1 2 2 . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 1 1 1 1 3 1 1 1 1 . . 
            . 3 1 1 1 3 3 3 3 3 1 2 2 2 . . 
            . 3 1 1 1 3 2 2 . 3 1 . . . . . 
            . 3 3 1 2 2 . . . 3 1 . . . . . 
            . . 3 2 2 3 . . . 1 . . . . . . 
            . . . . . 3 3 . 3 1 . . . . . . 
            . . . . . . 3 1 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 . . . . . . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . 3 . . . . . . 3 3 . . . 
            . . . . . . . . . . . . 3 . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 . . . . . . . . . . . . 
            . . . 3 3 . . . . . . 3 . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . . 3 . . . 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
            100,
            false
        )
    } else if (hero.vx > 0) {
        missile.setVelocity(175, 0)
        animation.runImageAnimation(
            missile,
            [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
            . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
            . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
            . . . . . 1 3 . 2 2 3 1 1 1 3 . 
            . . . . . 1 3 . . . 2 2 1 3 3 . 
            . . . . . . 1 . . . 3 2 2 3 . . 
            . . . . . . 1 3 . 3 3 . . . . . 
            . . . . . . . 1 1 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 . . . 3 . . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . 3 . . . . . . 3 3 . . . 
            . . . . . . . . . . . . 3 . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . . . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . 3 . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 . . . . . . . . . . . . 
            . . . 3 3 . . . . . . 3 . . . . 
            . . . . 3 3 . . . . 3 3 . . . . 
            . . . . . . . . . 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
            100,
            false
        )
    } else if (hero.vy < 0) {
        missile.setVelocity(0, -175)
        animation.runImageAnimation(
            missile,
            [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . . 2 1 1 1 1 3 . . . . . 
            . . . . . 2 3 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 2 . . . . . 
            . . . . . . 2 3 1 2 . . . . . . 
            . . . . . . 2 3 1 2 . . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . . 3 1 3 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . 3 3 3 3 3 3 3 . . . . 
            . . . . 3 3 1 1 1 1 1 3 3 . . . 
            . . . . 2 1 1 1 1 1 1 1 2 . . . 
            . . . . 2 2 1 1 1 1 1 2 2 . . . 
            . . . 3 3 2 3 3 1 3 3 2 3 3 . . 
            . . 3 3 . . 2 3 1 3 2 . . 3 3 . 
            . . 1 . . . 2 3 1 3 2 . . . 1 . 
            . . 1 3 . . . 3 1 3 . . . 3 1 . 
            . . . 1 1 3 3 3 3 3 3 3 1 1 . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . 2 1 2 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 3 . . . . . . 
            . . . 3 3 . . . . . . . . . . . 
            . . 3 3 . . . . . . . . 3 3 . . 
            . 3 3 . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 . . . . . . . . . . . . . . 
            . 3 3 . . . . . . . . . . 3 . . 
            . . 3 3 . . . . . . . . 3 3 . . 
            . . . . . . . . . . . 3 3 . . . 
            . . . . . . 3 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
            100,
            false
        )
    } else if (hero.vy > 0) {
        missile.setVelocity(0, 175)
        animation.runImageAnimation(
            missile,
            [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . 2 3 1 1 3 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 2 1 3 2 . . . . . . 
            . . . . . . 2 1 3 2 . . . . . . 
            . . . . . 2 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 3 2 . . . . . 
            . . . . . 3 1 1 1 1 2 . . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . . . 2 1 2 . . . . . . . 
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 3 3 3 3 3 3 3 1 1 . . . 
            . 1 3 . . . 3 1 3 . . . 3 1 . . 
            . 1 . . . 2 3 1 3 2 . . . 1 . . 
            . 3 3 . . 2 3 1 3 2 . . 3 3 . . 
            . . 3 3 2 3 3 1 3 3 2 3 3 . . . 
            . . . 2 2 1 1 1 1 1 2 2 . . . . 
            . . . 2 1 1 1 1 1 1 1 2 . . . . 
            . . . 3 3 1 1 1 1 1 3 3 . . . . 
            . . . . 3 3 3 3 3 3 3 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 3 . . . . . . 
            . . . 3 3 . . . . . . . . . . . 
            . . 3 3 . . . . . . . . 3 3 . . 
            . . 3 . . . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 3 . . . . . . . . . . . . . . 
            . 3 3 . . . . . . . . . . 3 3 . 
            . . 3 3 . . . . . . . . 3 3 . . 
            . . . . . . . . . . . 3 3 . . . 
            . . . . . . 3 3 3 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
            100,
            false
        )
    } else {
        missile.setImage(assets.image`myImage0`)
    }
}

sprites.onDestroyed(SpriteKind.Projectile, function (sprite: ProjectileSprite) {
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    currentNumberOfProjectiles -= 1
})
function calculateScore(food: Sprite, hero: PlayerSprite): number {
    return Math.sqrt((food.x - hero.x) ** 2 + (food.y - hero.y) ** 2)
}


class PlayerSprite extends sprites.ExtendableSprite {
    hitPoints: number
    hit(points: number, effects: effects.ParticleEffect, ms: number): void {
        this.hitPoints -= points
        if (this.hitPoints <= dead) {
            this.destroy(effects, ms)
        }
    }
    set(setPositionX: number, setPositionY: number): void {
        this.setPosition(setPositionX, setPositionY)
    }
    move(sprite: Sprite, vx: number, vy: number): void {
        controller.moveSprite(sprite, vx, vy)
    }
    c(who: Sprite): void {
        scene.cameraFollowSprite(who)
    }
    saying<T>(things: T): void {
        this.say(things)
    }

    constructor(image: Image, kind: number) {
        super(image, kind)
    }
}