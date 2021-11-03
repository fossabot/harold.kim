---
title: Gaming
---

# <i class="fa-solid fa-puzzle-piece"></i> Gaming

## <i class="fa-brands fa-steam"></i> Steam <span class="small"><a style="margin-top: 12px; float:right;" href="https://steamcommunity.com/id/stypr">/id/stypr</a></span>

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

## <i class="fa-solid fa-headphones-simple"></i> オンゲキ <span class="small"><u style="margin-top:12px; float:right;">5068084313130</u></span>


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

## <i class="fa-solid fa-headphones-simple"></i> maimai DX <span class="small"><u style="margin-top:12px; float:right">5069084813130</u></span>

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

## <i class="fa-solid fa-headphones-simple"></i> CHUNITHM <span class="small"><u style="margin-top:12px; float:right">5063094016130</u></span>

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


## <i class="fa-solid fa-headphones-simple"></i> プロセカ <span class="small"><u style="margin-top:12px; float:right">6719346701660162</u></span>

<div v-if="!proseka_error">

LEVEL {{this.proseka.level}}

<span v-for="badge in proseka.badges">
    <span class="badge">
        {{badge[3]}}
        <span v-if="badge[2]=='high' || badge[2]=='highest'">
            ★★
        </span>
        <span v-else-if="badge[2]=='middle'">
            ★
        </span>
        <span v-else>
            ☆
        </span>
        <span v-if="badge[1]>1">
            &nbsp;{{badge[1]}}
        </span>
    </span>&nbsp;
</span>
<br>

### Current Deck

<span v-for="deck in proseka.deck_list">
    <!-- Sorry for the spagetti code, I didn't intend to code something ugly like this! -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 520" class="deck-image">
        <defs>
            <pattern width="330" height="520" :id="'thumb-'+deck.id" patternUnits="userSpaceOnUse">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 520">
                    <image
                        v-if="deck.card_info.defaultImage == 'special_training'"
                        preserveAspectRatio="none"
                        :href="'https://sekai-res.dnaroma.eu/file/sekai-assets/character/member_cutout/'+deck['assetbundleName']+'_rip/after_training.webp'"
                        x="-135"
                        y="0"
                        height="576"
                        width="620"
                    ></image>
                    <image
                        v-if="deck.card_info.defaultImage != 'special_training'"
                        preserveAspectRatio="none"
                        :href="'https://sekai-res.dnaroma.eu/file/sekai-assets/character/member_cutout/'+deck['assetbundleName']+'_rip/normal.webp'"
                        x="-135"
                        y="0"
                        height="576"
                        width="620"
                    ></image>
                    <image :href="this.proseka.assets[deck.attr]" x="20" y="20" width="50" height="50"></image>
                    <rect x="0" y="450" width="330" height="70" fill="black" fill-opacity="0.8"></rect>
                    <text x="30" y="493" width="200" height="50" font-size="40" fill="white">Lv.{{deck.card_info.level}}</text>
                    <!-- Birthday exception -->
                    <image v-if="deck.rarity_type == 'rarity_birthday'" :href="this.proseka.assets.card_birthday" x="16" y="395" width="50" height="50"></image>
                    <image
                        v-if="deck.rarity > 0 && deck.card_info.defaultImage == 'special_training' && deck.rarity_type != 'rarity_birthday'"
                        :href="this.proseka.assets.card_star"
                        x="16" y="395" width="50" height="50"
                    ></image>
                    <image
                        v-if="deck.rarity > 1 && deck.card_info.defaultImage == 'special_training' && deck.rarity_type != 'rarity_birthday'"
                        :href="this.proseka.assets.card_star"
                        x="66" y="395" width="50" height="50"
                    ></image>
                    <image
                        v-if="deck.rarity > 2 && deck.card_info.defaultImage == 'special_training' && deck.rarity_type != 'rarity_birthday'"
                        :href="this.proseka.assets.card_star"
                        x="116" y="395" width="50" height="50"
                    ></image>
                    <image
                        v-if="deck.rarity > 3 && deck.card_info.defaultImage == 'special_training' && deck.rarity_type != 'rarity_birthday'"
                        :href="this.proseka.assets.card_star"
                        x="166" y="395" width="50" height="50"
                    ></image>
                    <image
                        v-if="deck.rarity > 0 && deck.card_info.defaultImage != 'special_training' && deck.rarity_type != 'rarity_birthday'"
                        :href="this.proseka.assets.card_star_normal"
                        x="16" y="395" width="50" height="50"
                    ></image>
                    <image
                        v-if="deck.rarity > 1 && deck.card_info.defaultImage != 'special_training' && deck.rarity_type != 'rarity_birthday'"
                        :href="this.proseka.assets.card_star_normal"
                        x="66" y="395" width="50" height="50"
                    ></image>
                    <image
                        v-if="deck.rarity > 2 && deck.card_info.defaultImage != 'special_training' && deck.rarity_type != 'rarity_birthday'"
                        :href="this.proseka.assets.card_star_normal"
                        x="116" y="395" width="50" height="50"
                    ></image>
                    <image
                        v-if="deck.rarity > 3 && deck.card_info.defaultImage != 'special_training' && deck.rarity_type != 'rarity_birthday'"
                        :href="this.proseka.assets.card_star_normal"
                        x="166" y="395" width="50" height="50"
                    ></image>
                </svg>
            </pattern>
        </defs>
        <rect x="4" y="4" width="322" height="512" :fill="'url(#thumb-'+deck.id+')'"></rect>
    </svg>
</span>


### Recent Play

<table width=100% class="fixed-top">
    <tr v-for="log in this.proseka.recent_log">
        <td width=50>
            <div class="badge" align=center>{{log.musicDifficulty.toUpperCase()}}</div>
        </td>
        <td>
            {{log.musicTitle}}
        </td>
        <td align=right>
            <b style="font-size: 10pt;">{{log.playResult.toUpperCase()}}</b>
        </td>
    </tr>
</table>

<br><br>

## <i class="fa-solid fa-gamepad"></i> Nintendo Switch

SW-3494-7684-3795

<br>
</div>

<script type="module">
import { useData } from 'vitepress'

export default {
  data() {
    return {
      data: useData(),
      steam: {},
      sega: {'ongeki': {}, 'chunithm': {}, 'maimai': {}},
      proseka: {
          'assets': {
            'cool': '/static/proseka/cool.png',
            'cute': '/static/proseka/cute.png',
            'mysterious': '/static/proseka/mysterious.png',
            'pure': '/static/proseka/pure.png',
            'happy': '/static/proseka/happy.png',
            'card_rarity_2': '/static/proseka/card_rarity_2.png',
            'card_rarity_3': '/static/proseka/card_rarity_3.png',
            'card_rarity_birthday': '/static/proseka/card_rarity_birthday.png',
            'card_rarity_4': '/static/proseka/card_rarity_4.png',
            'card_birthday': '/static/proseka/card_birthday.png',
            'card_star': '/static/proseka/card_star.png',
            'card_star_normal': '/static/proseka/card_star_normal.png',
            'honor_star': '/static/proseka/honor_star.png',
            'honor_middle': '/static/proseka/honor_middle.png',
            'honor_high': '/static/proseka/honor_high.png',
            'honor_highest': '/static/proseka/honor_highest.png',
          }
        },
      proseka_error: true,
      sega_error: true,
      steam_error: true,
    };
  },
  mounted() {
    // Dynamically load APIs
    // Return stored gists on error
    fetch(`${this.data.theme.apiServer}/steam`)
    .then((response) => response.json())
    .then((response) => {
      this.updateSteam(response)
    })
    .catch((error) => {
      console.log(error)
    });
    fetch(`${this.data.theme.apiServer}/sega`)
    .then((response) => response.json())
    .then((response) => {
      this.updateSega(response)
    })
    .catch((error) => {
      console.log(error)
    });
    fetch(`${this.data.theme.apiServer}/proseka`)
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
      // Parse Proseka JSON
      this.proseka.username = response.user.userGamedata.name;
      this.proseka.level = response.user.userGamedata.rank;
      this.proseka.word = response.userProfile.word;
      this.proseka.badges = [
        [
          String(response.userProfile.honorId1).padStart(4, '0'),
          response.userProfile.honorLevel1,
          response.userProfile.honorInfo1.honorRarity,
          response.userProfile.honorInfo1.name,
          response.userProfile.honorInfo1
        ],
        [
          String(response.userProfile.honorId2).padStart(4, '0'),
          response.userProfile.honorLevel2,
          response.userProfile.honorInfo2.honorRarity,
          response.userProfile.honorInfo2.name,
          response.userProfile.honorInfo2
        ],
        [
          String(response.userProfile.honorId3).padStart(4, '0'),
          response.userProfile.honorLevel3,
          response.userProfile.honorInfo3.honorRarity,
          response.userProfile.honorInfo3.name,
          response.userProfile.honorInfo3
        ],
      ];
      this.proseka.deck_id = response.user.userGamedata.deck;
      this.proseka.deck_list = [
        response.userDecks[0].member1,
        response.userDecks[0].member2,
        response.userDecks[0].member3,
        response.userDecks[0].member4,
        response.userDecks[0].member5
      ];
      // Recent playlog needs to be sorted
      this.proseka.recent_log = response.userMusicResults
      this.proseka_error = false
    },
    updateSega(response) {
      // Parse ongeki
      this.sega.ongeki = response.ongeki.info
      this.sega.ongeki.log = response.ongeki.log
      this.sega.ongeki.badges = []
      this.sega.ongeki.badges.push(response.ongeki.info.title)
      if(response.ongeki.info.battle_point >= 19000){
        this.sega.ongeki.badges.push('奏夢')
      }else if(response.ongeki.info.battle_point >= 17000){
        this.sega.ongeki.badges.push('奏華')
      }else if(response.ongeki.info.battle_point >= 15000){
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
