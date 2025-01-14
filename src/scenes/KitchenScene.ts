import { Sprite } from "pixi.js";
import { GameState } from "../components/GameState";
import { HitBox } from "../components/HitBox";
import { Direction, NavigationArrow } from "../components/NavigationArrow";
import { garden, itemHub, livingroom } from "../state/rooms";
import { BaseScene } from "./BaseScene";
import { lampText as flashlightLampText } from "../state/items";

export class KitchenScene extends BaseScene {
  private paintingHitbox: any;
  private juiceHitbox: any;
  private cupboardHitbox: any;
  private flashlightHitbox: any;

  constructor() {
    super(Sprite.from("kitchen"));

    const baobaoText =
      "There's a reason why so many cases have been solved by examining the kitchen. It's where people let their guard down and leave behind important clues that can crack the case.";
    const baobaoHead = new HitBox(266, 200, 105);
    const baobaoBody = new HitBox(120, 280, 300, 770);
    const baobaoArms = new HitBox(66, 340, 390, 250);
    baobaoHead.addClickText(baobaoText);
    baobaoBody.addClickText(baobaoText);
    baobaoArms.addClickText(baobaoText);
    this.addChild(baobaoArms);
    this.addChild(baobaoBody);
    this.addChild(baobaoHead);

    const painting = new HitBox(1200, 45, 290, 250, -3);
    this.revealPainting = this.revealPainting.bind(this);
    painting.addClickAction(this.revealPainting, "UV flashlight");
    painting.addClickText(
      "The diamond seems to glow like a miniature moon, suspended in the endless void of the black background."
    );
    this.paintingHitbox = this.addChild(painting);

    const juice = new HitBox(580, 406, 65, 155, 0);
    this.takeJuice = this.takeJuice.bind(this);
    juice.addClickAction(
      this.takeJuice,
      "",
      "Not sure what to make of this pumpkin juice. Maybe it's part of some strange culinary experiment? (Pumpkin juice was added to inventory)"
    );
    this.juiceHitbox = this.addChild(juice);

    const cupboard = new HitBox(495, 580, 170, 330, 4);
    this.openCupboard = this.openCupboard.bind(this);
    this.removeFlashlight = this.removeFlashlight.bind(this);
    cupboard.addClickAction(
      this.openCupboard,
      "",
      "This door sounds like it's auditioning for a horror movie."
    );
    this.cupboardHitbox = this.addChild(cupboard);

    const cupboardRight = new HitBox(660, 590, 170, 360, 4);
    cupboardRight.addClickAction(this.openCupboard);
    this.addChild(cupboardRight);

    const leftPanText = () =>
      this.addText([
        "This pan is as empty as my stomach after a long day of sleuthing.",
      ]);
    const panLeft = new HitBox(1300, 480, 80, 60);
    panLeft.addClickAction(leftPanText);
    this.addChild(panLeft);

    const panRight = new HitBox(1400, 486, 80, 60);
    panRight.addClickText(
      "No need to stir the pot here. This pan is bone dry."
    );
    this.addChild(panRight);

    const panCupboardText =
      "The cabinet under the stove is like a time capsule of kitchen memories. Some good, some bad, and some better left forgotten.";
    const panCupboard = new HitBox(1240, 600, 200, 70, 4);
    panCupboard.addClickText(panCupboardText);
    this.addChild(panCupboard);

    const panCupboardBottom = new HitBox(1310, 668, 120, 100, 8);
    panCupboardBottom.addClickText(panCupboardText);
    this.addChild(panCupboardBottom);

    const oven = new HitBox(1240, 540, 220, 60, 4);
    oven.addClickText(
      "With this stove as my ally, the investigation is sure to boil over with clues."
    );
    this.addChild(oven);

    const lampText =
      "The light from these lamps makes it feel like an old-timey detective movie in here.";
    const frontLamp = new HitBox(726, 208, 102, 80);
    frontLamp.addClickText(lampText);
    frontLamp.addClickText(flashlightLampText, "UV flashlight");
    this.addChild(frontLamp);

    const lampStringFront = new HitBox(774, 0, 12, 220);
    lampStringFront.addClickText(lampText);
    lampStringFront.addClickText(flashlightLampText, "UV flashlight");
    this.addChild(lampStringFront);

    const lampStringBack = new HitBox(926, 0, 12, 220);
    lampStringBack.addClickText(flashlightLampText, "UV flashlight");
    lampStringBack.addClickText(lampText);
    this.addChild(lampStringBack);

    const backLamp = new HitBox(880, 208, 102, 80);
    backLamp.addClickText(flashlightLampText, "UV flashlight");
    backLamp.addClickText(lampText);
    this.addChild(backLamp);

    const windowText =
      "I'm seeing right through this window, but I'm not sure what I'm looking for.";
    const window = new HitBox(372, 100, 200, 240);
    window.addClickText(windowText);
    this.addChild(window);

    const windowBottom = new HitBox(430, 330, 140, 110);
    window.addClickText(windowText);
    this.addChild(windowBottom);

    const drawer = new HitBox(1420, 600, 250, 100, 4);
    drawer.addClickText(
      "It's the little things that make all the difference in the kitchen, and this drawer has plenty of them."
    );
    this.addChild(drawer);

    const cookingPans = new HitBox(1420, 660, 250, 250, 4);
    cookingPans.addClickText(
      "Looks like someone has a real passion for cooking. Or hoarding pans."
    );
    this.addChild(cookingPans);

    const oblongPainting = new HitBox(596, 204, 122, 84, 2);
    oblongPainting.addClickText(
      "The beauty of minimalistic paintings lies in their ability to convey a message with just a few elements."
    );
    this.addChild(oblongPainting);

    const squarePainting = new HitBox(934, 284, 152, 128, -2);
    squarePainting.addClickText(
      "The minimalistic style of the painting may suggest simplicity, but don't be fooled - the value of this piece is anything but."
    );
    this.addChild(squarePainting);

    const flowerText =
      "The small imperfections in the vase suggest it was handmade, likely crafted during the Renaissance period in the Umbrian region of Italy.";
    const flowers = new HitBox(820, 470, 80);
    const flowerPot = new HitBox(786, 510, 70, 50);
    flowers.addClickText(flowerText);
    flowerPot.addClickText(flowerText);
    this.addChild(flowerPot);
    this.addChild(flowers);

    const brownFlowerText =
      "The rich brown color of this vase suggests that it was likely made from high-quality clay found in the Mediterranean region.";
    const rightFlowerVase = new HitBox(1542, 500, 54, 70);
    rightFlowerVase.addClickText(brownFlowerText);
    const rightFlowers = new HitBox(1570, 470, 72);
    rightFlowers.addClickText(brownFlowerText);
    this.addChild(rightFlowers);
    this.addChild(rightFlowerVase);
  }

  public loadNavigation() {
    this.addChild(new NavigationArrow(garden, Direction.Right));
    this.addChild(new NavigationArrow(livingroom, Direction.Left));
  }

  private openCupboard() {
    if (!GameState.openedCupboard) {
      super.addCutout("openCupboard", 411, 565);
      this.removeChild(this.cupboardHitbox);
    }

    if (!itemHub.hasItem("UV flashlight") && !GameState.openedCupboard) {
      const flashlight = new HitBox(530, 625, 105, 40, 8);
      flashlight.addClickAction(
        this.removeFlashlight,
        "",
        "This might look like an ordinary flashlight, but it is actually a UV flashlight. This could come in handy later. (UV flashlight was added to inventory)"
      );
      this.flashlightHitbox = this.addChild(flashlight);
    }

    GameState.openedCupboard = true;
  }

  private removeFlashlight() {
    this.removeChild(this.flashlightHitbox);
    itemHub.addItem("UV flashlight");
    this.addCutout("removeFlashlight", 493, 597, 1);
  }

  private revealPainting() {
    this.removeChild(this.paintingHitbox);
    this.addCutout("revealPainting", 1171, 0);
    GameState.BFound = true;
  }

  private takeJuice() {
    this.removeChild(this.juiceHitbox);
    itemHub.addItem("pumpkin juice");
    this.addCutout("removeJuice", 563, 391);
  }
}
