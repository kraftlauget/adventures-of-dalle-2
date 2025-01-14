import { Sprite } from "pixi.js";
import { GameState } from "../components/GameState";
import { HitBox } from "../components/HitBox";
import { Direction, NavigationArrow, Position } from "../components/NavigationArrow";
import { bedroom } from "../state/rooms";
import { BaseScene } from "./BaseScene";

export class PumpkinScene extends BaseScene {
  private bowlHitbox: any;
  constructor() {
    super(Sprite.from("pumpkin"));

    const bowl = new HitBox(955, 550, 600, 0);
    this.fillBowl = this.fillBowl.bind(this);
    bowl.addClickAction(
      this.fillBowl,
      "pumpkin juice",
      "Who knew that pouring pumpkin juice into a pumpkin-shaped container could produce such a beautiful display of colors? This pumpkin prism reaction is truly a sight to behold."
    );
    this.bowlHitbox = this.addChild(bowl);
  }

  public loadNavigation() {
    this.addChild(new NavigationArrow(bedroom, Direction.Down, Position.BottomLeft));
  }

  private fillBowl() {
    this.removeChild(this.bowlHitbox);
    this.addCutout("filled", 487, 158);
    GameState.revealedPumpkin = true;
  }
}
