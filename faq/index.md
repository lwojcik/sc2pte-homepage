---
title: F.A.Q. - Frequently Asked Questions
---

# F.A.Q. - Frequently Asked Questions

Answers to common issues.

## I just finished a game and the extension didn't update immediately

Data displayed by extension is cached and updated every few minutes. An average SC2 game takes 10-30 minutes, plus I need to obey Blizzard's API request limits, hence the data isn't refreshed immediately. But be patient, the extension will update itself sooner or later.

## My portrait frame is incorrect

This is partially Blizzard's fault.

The extension relies on data fetched from their API. Battle.net API contains information about highest 1v1 and team ranks achieved and I use those when calculating which frame to display. This data isn't always correct.

Also, the mode player plays the most isn't always the highest ranked mode. Yours truly is a silver in 1v1 and platinum in teams, while playing teams very infrequently. Which frame should be used in this case?

[The issue is known](https://github.com/lukemsc/sc2profile-twitch-extension-api/issues/1) and I'm debating how to fix this.

## The extension doesn't show my portrait (blank field or a generic portrait) or displays wrong portrait

This is entirely Blizzard's fault.

In many cases data received from Battle.net API is out of sync with actual game state, especially in case of recently introduced portraits. If Battle.net API lies, the extension will repeat those lies. :-(

This is a [known issue](https://github.com/lukemsc/sc2profile-twitch-extension-api/issues/2) and I'm yet to propose a systemic workaround for that. If you have a suggestion how to fix this, [let me know](https://sc2pte.lukem.net/#contact).

## I just tied a game and I can't see it in the extension

Blizzard's fault again.

The tie isn't visible in your ladder statistics returned by Battle.net API. I can't fix this. :(
