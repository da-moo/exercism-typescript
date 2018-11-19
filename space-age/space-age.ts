export default class SpaceAge {
  [k: string]: any;
  private static readonly EARTH_SECONDS_IN_YEAR = 31557600;
  private static readonly PLANET_YEAR_SCALES = new Map<string, number>([
    ['Earth', 1],
    ['Mercury', 0.2408467],
    ['Venus', 0.61519726],
    ['Mars', 1.8808158],
    ['Jupiter', 11.862615],
    ['Saturn', 29.447498],
    ['Uranus', 84.016846],
    ['Neptune', 164.79132]
  ]);

  public seconds: number;

  constructor(ageInSeconds: number) {
    this.seconds = ageInSeconds;

    for (const [stellarBody, scale] of SpaceAge.PLANET_YEAR_SCALES) {
      const funcName = 'on' + stellarBody;
      SpaceAge.prototype[funcName] = () => {
        return this.scaleToPlanetYears(scale);
      };
    }
  }

  private scaleToPlanetYears(scaleRelativeToEarthYears: number): number {
    return +(
      this.seconds /
      SpaceAge.EARTH_SECONDS_IN_YEAR /
      scaleRelativeToEarthYears
    ).toFixed(2);
  }
}
