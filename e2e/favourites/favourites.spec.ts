import { by, device, element, expect } from "detox";

describe("Favourites flow", () => {
  beforeAll(async () => {
    await device.installApp();
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should display the empty favourites list", async () => {
    await expect(element(by.id("launchesList"))).toBeVisible();
    await element(by.text("Favourites")).tap();
    await expect(element(by.text("You have no favourites yet"))).toBeVisible();
  });

  describe("when a launch is favourited", () => {
    it("should display in the favourites screen", async () => {
      await element(
        by.id("star-border").withAncestor(by.id("launch-107"))
      ).tap();

      await element(by.text("Favourites")).tap();
      await expect(element(by.text("Crew-1"))).toBeVisible();
    });
  });

  describe("when the launch details favourite icon is pressed", () => {
    it("should favourite the launch", async () => {
      await element(by.text("GPS III SV04 (Sacagawea)")).tap();
      await expect(element(by.id("launchDetailsContainer"))).toBeVisible();
      await element(by.id("FavouriteIcon")).tap();
      await expect(element(by.id("star"))).toBeVisible();
      await element(by.id("backButton")).tap();
      await element(by.text("Favourites")).tap();
      await expect(element(by.text("GPS III SV04 (Sacagawea)"))).toBeVisible();
    });
  });

  describe("when a favourite launch icon is pressed", () => {
    it("should remove it from the favourites list", async () => {
      await element(by.text("Favourites")).tap();
      await expect(element(by.text("Crew-1"))).toBeVisible();
      await element(by.id("star").withAncestor(by.id("launch-107"))).tap();
      await expect(element(by.text("Crew-1"))).not.toBeVisible();
    });
  });

  it("should persist the favourite launches selection", async () => {
    await device.launchApp({ newInstance: true });

    await element(by.text("Favourites")).tap();
    await expect(
      element(by.id("star").withAncestor(by.id("launch-106")))
    ).toBeVisible();
  });

  describe("when a favourite launch icon is pressed in launch details screen", () => {
    it("should remove it from the favourites list", async () => {
      await element(by.text("Favourites")).tap();
      await element(by.text("GPS III SV04 (Sacagawea)")).tap();
      await element(by.id("star")).tap();
      await element(by.id("backButton")).tap();
      await expect(
        element(by.text("You have no favourites yet"))
      ).toBeVisible();
    });
  });
});
