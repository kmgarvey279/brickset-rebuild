export class Set {
  public addImages: number = 0;
  public instructions: boolean = false;
  public pricePerPiece: number = 0.00;
  public currentValue: number = 0.00;
  constructor(public name: string, public number: number, public type: string, public themeGroup: string, public theme: string, public subTheme: string, public yearReleased: number, public tags: string, public pieces: number, public retailPrice: number, public ageRange: string, public packaging: string, public availability: string) {}

  getPartToPriceRatio() {
    return (this.retailPrice/this.pieces).toFixed(2);
  }

  addInstructions() {
    this.instructions = true;
  }

  getInstructions() {
    if (this.instructions == true) {
      return "Yes";
    } else {
      return "No";
    }
  }

  addNewImage() {
    this.addImages++;
  }
}
