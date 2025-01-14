import { Manager } from "./Manager";
import { Container, Sprite, Point } from "pixi.js";
import { TextBox } from "../components/TextBox";
import { IScene } from "./IScene";

export class BaseScene extends Container implements IScene {
  protected background: Sprite;
  protected backgroundScale: number;
  private textBox: TextBox;

  constructor(background: Sprite) {
    super();

    // Allow z-index
    this.sortableChildren = true;

    this.backgroundScale = 1;
    this.background = background;
    this.setBackground.bind(this);
    this.setBackground(this.background);

    // Set textBox
    this.textBox = new TextBox([""]);
    this.addChild(this.textBox);
  }

  public addChildContainer(item : Container): void {
    this.addChild(item);
  }

  protected setBackground(background: Sprite) {
    // Set scene background
    this.background = background;

    this.backgroundScale = Math.min(
      Manager.width / this.background.texture.width,
      1
    );

    this.background.scale.set(this.backgroundScale);
    this.background.anchor.set(0, 0);
    this.background.position = new Point(0, 0);
    this.addChild(this.background);
  }

  public addText = (text: string[]) => {
    this.textBox.setText(text);
  };

  public clearText(): void {
    this.textBox.removeChild(this.textBox);
  }

  public getBackground(): Sprite {
    return Sprite.from(this.background.texture);
  }

  protected addCutout(
    spriteName: string,
    x: number,
    y: number,
    zIndex = 0
  ): void {
    const cutout = Sprite.from(spriteName);
    cutout.scale.set(this.backgroundScale);
    cutout.position = new Point(x, y);
    cutout.zIndex = zIndex;
    this.addChild(cutout);
  }

  protected addCutoutToEdge(
    spriteName: string,
    left: boolean = true,
    top: boolean = true
  ): void {
    const cutout = Sprite.from(spriteName);
    cutout.scale.set(this.backgroundScale);
    const x = left ? 0 : Manager.width - cutout.width;
    const y = top ? 0 : Manager.height - cutout.height;
    cutout.position = new Point(x, y);
    this.addChild(cutout);
  }
}
