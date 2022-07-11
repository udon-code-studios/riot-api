# riot_api

A Deno library which provides functions and response types (DTOs) to interact with the Riot Games API.

## Deno example

#### code: `example.ts`
```ts
import * as riot from "https://deno.land/x/riot_api@v0.0.4-alpha/mod.ts";

const resp = await riot.summoner.byName("Rocket the dog", { region: riot.routes.Platform.NA1 });

console.log("Status Code:", resp.status);
console.log("SummonerDTO:", resp.summoner);
```

#### command:
```sh
deno run --allow-env --allow-net example.ts
```

#### output:
```
Status Code: 200
SummonerDTO: {
  id: "R8CGfb6loSV36rDJWxNAsviQcwq5dQAuyTtFvdLOknJC9LQ",
  accountId: "wxNY5m5YTudTjeDoSlOoJmwyWsJCu5QjGkO7yudyZSfA6NY",
  puuid: "PAJ5iwBc_NPU2uDjmwwvzBkJfdmM0sk4dejZ9YcjGgRTH7WPOaca90hkGOI1UYFAdc8Kp91MvfG2MA",
  name: "Rocket the dog",
  profileIconId: 759,
  revisionDate: 1657168517000,
  summonerLevel: 215
}
```

## Node (ESM) example

Usage in Node is identical to the above Deno example.

Two changes need to be made since the package system is handled differently in NPM:
- Install package using `npm i udon-riot-api`
- Change import statement to `import * as riot from "udon-riot-api";`

View the NPM package here: https://www.npmjs.com/package/udon-riot-api

## Help

Feel free to reach out to me at my personal email (leo.battalora@gmail.com) or open an issue in the ![Issues tab](https://github.com/udon-code-studios/riot-api/issues).
