---
title: Gaming
---

# &#127918; Gaming


## Steam <span class="small"><a style="margin-top: 12px; float:right;" href="https://steamcommunity.com/id/stypr">/id/stypr</a></span>

<div v-if="!steam_error">

### Recent Play

<table width=100%>
    <tr v-for="game in steam">
        <td>
            <img :src="'https://media.steampowered.com/steamcommunity/public/images/apps/' + game.appid + '/' + game.img_icon_url + '.jpg'" width=16 />&nbsp;
            {{game.name}}
        </td>
        <td align=right>
            {{(game.playtime_2weeks/60).toFixed(2)}} hrs
        </td>
    </tr>
</table>

</div>

<br>

## オンゲキ <span class="small"><u style="margin-top:12px; float:right;">5068084313130</u></span>


<div v-if="!sega_error">

RATING {{this.sega.ongeki.current_rating}}

<span v-for="badge in sega.ongeki.badges">
    <span class="badge">{{badge}}</span>&nbsp;
</span>

### Recent Play

<table width=100% class="fixed-top">
    <tr v-for="log in sega.ongeki.log">
        <td width=50>
            <div class="badge" align=center>{{log.difficulty}}</div>
        </td>
        <td>
            {{decodeTitle(log.title)}}
        </td>
        <td align=right>
            <b>{{log.score_sign.toUpperCase().replace("PLUS","+")}}</b>
        </td>
    </tr>
</table>

</div>

<br>

## maimai DX <span class="small"><u style="margin-top:12px; float:right">5069084813130</u></span>

<div v-if="!sega_error">

RATING {{this.sega.maimai.current_rating}}

<span v-for="badge in sega.maimai.badges">
    <span class="badge">{{badge}}</span>&nbsp;
</span>

### Recent Play

<table width=100% class="fixed-top">
    <tr v-for="log in sega.maimai.log">
        <td width=50>
            <div class="badge" align=center>{{log.difficulty}}</div>
        </td>
        <td>
            {{decodeTitle(log.title)}}
        </td>
        <td align=right>
            <b>{{log.score_sign.toUpperCase().replace("PLUS","+")}}</b>
        </td>
    </tr>
</table>

</div>

<br>

## CHUNITHM <span class="small"><u style="margin-top:12px; float:right">5063094016130</u></span>

<div v-if="!sega_error">

RATING {{this.sega.chunithm.current_rating}}

<span v-for="badge in sega.chunithm.badges">
    <span class="badge">{{badge}}</span>&nbsp;
</span>

### Recent Play

<table width=100% class="fixed-top">
    <tr v-for="log in sega.chunithm.log">
        <td width=50>
            <div class="badge" align=center>{{log.difficulty}}</div>
        </td>
        <td>
            {{decodeTitle(log.title)}}
        </td>
        <td align=right>
            <b>{{convertChunithmScore(log.score_sign)}}</b>
        </td>
    </tr>
</table>

</div>

<br>

## Nintendo Switch

SW-3494-7684-3795

<br>

## プロセカ <span class="small"><u style="margin-top:12px; float:right">6719346701660162</u></span>

<div v-if="!proseka_error">

<span v-for="badge in proseka.badges">
    <span class="badge">{{badge}}</span>&nbsp;
</span>

</div>

<br><br>

<script type="module">
import { useData } from 'vitepress'

export default {
  data() {
    return {
      steam: {},
      sega: {'ongeki': {}, 'chunithm': {}, 'maimai': {}},
      proseka: {},
      proseka_error: true,
      sega_error: true,
      steam_error: true,
    };
  },
  mounted() {
    // Dynamically load APIs
    // Return stored gists on error
    fetch("https://api.harold.kim/api/v1/steam")
    .then((response) => response.json())
    .then((response) => {
      this.updateSteam(response)
    })
    .catch((error) => {
      console.log(error)
    });
    fetch("https://api.harold.kim/api/v1/sega")
    .then((response) => response.json())
    .then((response) => {
      this.updateSega(response)
    })
    .catch((error) => {
      console.log(error)
    });
    fetch("https://api.harold.kim/api/v1/proseka")
    .then((response) => response.json())
    .then((response) => {
      this.updateProseka(response)
    })
    .catch((error) => {
      console.log(error)
    });
  },
  methods: {
    // XSS-safe decode
    decodeTitle(title) {
      for (let i of Array(2).keys()) {
        let p = new DOMParser;
        title = p.parseFromString(
          '<!doctype html><body>' + title,
          'text/html').body.textContent
      }
      return title
    },
    // ...................................
    convertChunithmScore(score) {
        let result = ""
        switch(score){
            case '0':
                result = 'D'
                break
            case '1':
                result = 'C'
                break
            case '2':
                result = 'B'
                break
            case '3':
                result = 'BB'
                break
            case '4':
                result = 'BBB'
                break
            case '5':
                result = 'A'
                break
            case '6':
                result = 'AA'
                break
            case '7':
                result = 'AAA'
                break
            case '8':
                result = 'S'
                break
            case '9':
                result = 'SS'
                break
            case '10':
                result = 'SSS'
                break
        }
        return result
    },
    updateSteam(response) {
      this.steam = response.response.games
      this.steam_error = false
    },
    updateProseka(response) {
      // Parse Proseka
      this.proseka.badges = response.badges
      this.proseka_error = false
    },
    updateSega(response) {
      // Parse ongeki
      this.sega.ongeki = response.ongeki.info
      this.sega.ongeki.log = response.ongeki.log
      this.sega.ongeki.badges = []
      this.sega.ongeki.badges.push(response.ongeki.info.title)
      if(response.ongeki.info.battle_point >= 15000){
        this.sega.ongeki.badges.push('奏伝')
      }
      // Parse maimai
      this.sega.maimai = response.maimai.info
      this.sega.maimai.log = response.maimai.log
      this.sega.maimai.badges = []
      this.sega.maimai.badges.push(response.maimai.info.title)
      this.sega.maimai.badges.concat(response.maimai.info.extra)
      // Parse Chunithm
      this.sega.chunithm = response.chunithm.info
      this.sega.chunithm.log = response.chunithm.log
      this.sega.chunithm.badges = []
      this.sega.chunithm.badges.push(response.chunithm.info.title)

      // disable error
      this.sega_error = false
    },
  }
};
</script>
