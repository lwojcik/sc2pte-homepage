---
title: Changelog
---

# Changelog

Only versions released on Twitch are mentioned here.

## v1.1.0 (?? Nov 2018)

* Migrated from [old Mashery API](https://dev.battle.net/) to [https://develop.battle.net/documentation/api-reference/starcraft-2-community-api](new StarCraft II Community APIs)
* Simplified configuration form: only profile URL is required
* No support for legacy profile URLs (e.g. [http://eu.battle.net/sc2/en/profile/5593296/1/Lukem/](http://eu.battle.net/sc2/en/profile/5593296/1/Lukem/)) any more
* **Introduced known issue:** Stats for archon players aren't displayed. Instead, they're added up to 2v2 stats, thus rendering this datapoint inaccurate. The bug has to do with Blizzard labelling archon ladders as '2v2' and [https://us.battle.net/forums/en/bnet/topic/20769759674#post-10](I submitted this to Blizzard). I'll decide what to do depending on their answer
* Portrait frames are now determined automatically based on highest 1v1 or team rank
* Portraits should now be displayed correctly
* Draws aren't displayed in the extension. Blizzard APIs don't expose this information any more. [https://us.battle.net/forums/en/bnet/topic/20769759674#post-12](I submitted this to Blizzard) and I'll reintroduce the feature if they bring this back.

## v1.0.4 (19 Oct 2018)

* Modified configuration form: support for new StarCraft II profile URLs (e.g. [https://starcraft2.com/en-us/profile/2/1/5593296/](https://starcraft2.com/en-us/profile/2/1/5593296/)) while retaining support for legacy URLs (e.g. [http://eu.battle.net/sc2/en/profile/5593296/1/Lukem/](http://eu.battle.net/sc2/en/profile/5593296/1/Lukem/))

## v1.0.3 (11 Oct 2018)

* First public release
* Optimizing Webpack build process while keeping generated code non-obfuscated as per Twitch guidelines

## v0.0.2 (8 Oct 2018)

* Initial version, available only for a testing group
