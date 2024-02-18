import { by, device, element, expect } from "detox";

describe("Latest Launches flow", () => {
  beforeAll(async () => {
    await device.installApp();
    await device.launchApp();
  });
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should display the latest launches list", async () => {
    await expect(element(by.id("launchesList"))).toBeVisible();
  });

  describe("when a card is pressed", () => {
    it("should navigate to the launch details screen", async () => {
      await element(by.id("launch-107")).tap();
      await expect(element(by.id("launchDetailsContainer"))).toBeVisible();
    });
  });

  describe("when a card is pressed and the favourite icon is pressed", () => {
    it("should favourite the launch", async () => {
      await element(by.id("launch-107")).tap();
      await expect(element(by.id("launchDetailsContainer"))).toBeVisible();
      await element(by.id("FavouriteIcon")).tap();
      await expect(element(by.id("star"))).toBeVisible();
      await element(by.id("backButton")).tap();
      await expect(
        element(by.id("star").withAncestor(by.id("launch-107")))
      ).toBeVisible();
    });

    it("should persist the favourite launch", async () => {
      await device.launchApp({ newInstance: true });
      await expect(
        element(by.id("star").withAncestor(by.id("launch-107")))
      ).toBeVisible();
    });
  });

  describe("when a favourite launch icon is pressed", () => {
    it("should unfavourite the launch", async () => {
      await element(by.id("star")).tap();
      await expect(
        element(by.id("star-border").withAncestor(by.id("launch-107")))
      ).toBeVisible();
      await element(by.id("launch-107")).tap();
      await expect(
        element(
          by.id("star-border").withAncestor(by.id("launchDetailsContainer"))
        )
      ).toBeVisible();
    });
  });
});
