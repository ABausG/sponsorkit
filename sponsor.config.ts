import { defineConfig, presets } from "sponsorkit";

export default defineConfig({
  github: {
    login: "ABausG",
  },
  width: 800,
  formats: ["svg"],
  tiers: [
    {
      title: "Backers",
      preset: presets.none,
    },
    {
      title: "Bronze Sponsors",
      monthlyDollars: 5,
      preset: presets.base,
    },
    {
      title: "Silver Sponsors",
      monthlyDollars: 25,
      preset: presets.large,
    },
    {
      title: "Gold Sponsors",
      monthlyDollars: 100,
      preset: presets.xl,
    },
  ],
});