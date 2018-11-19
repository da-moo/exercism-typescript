export default class SpaceAge {
  private static readonly EARTH_SECONDS_IN_YEAR = 31557600;
  public seconds: number;

  constructor(ageInSeconds: number) {
    this.seconds = ageInSeconds;
  }

  onEarth(): number {
    return this.scaleToPlanetYears(1);
  }

  onMercury(): number {
    return this.scaleToPlanetYears(0.2408467);
  }

  onVenus(): number {
    return this.scaleToPlanetYears(0.61519726);
  }

  onMars(): number {
    return this.scaleToPlanetYears(1.8808158);
  }

  onJupiter(): number {
    return this.scaleToPlanetYears(11.862615);
  }

  onSaturn(): number {
    return this.scaleToPlanetYears(29.447498);
  }

  onUranus(): number {
    return this.scaleToPlanetYears(84.016846);
  }

  onNeptune(): number {
    return this.scaleToPlanetYears(164.79132);
  }

  private scaleToPlanetYears(scaleRelativeToEarthYears: number): number {
    return +(
      this.seconds /
      SpaceAge.EARTH_SECONDS_IN_YEAR /
      scaleRelativeToEarthYears
    ).toFixed(2);
  }
}
