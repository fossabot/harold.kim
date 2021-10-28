---
title: About
---

<br>
<br>
<img src=../assets/profile/stypr.png width=200 style="border-radius: 0.1em; border: 2px solid #ccc;">

# Harold Kim <small style="font-size:70%; margin-left: 10px;">a.k.a. stypr</small>

Currently working as a security engineer in Japan.<br>
Interested in web exploitation, pentests and development.

---

<br>

## <i class="fa-solid fa-face-grin-beam"></i> Affiliated with

* <i class="fa-solid fa-briefcase"></i> [Flatt Security Inc.](https://flatt.tech)
* <i class="fa-regular fa-flag"></i> [r3kapig](https://r3kapig.com)

<table class="partition">
<tr>
<td>

## <i class="fa-solid fa-flag"></i> CTF

### International Finals

* <b>2021</b> &#129306; DEFCON 29 CTF
* <b>2021</b> &#129352; LINE CTF
* <b>2020</b> &#129353; HackTM CTF
* <b>2020</b> &#129306; DEFCON 28 CTF
* <b>2020</b> &#129351; InterKosen CTF
* <b>2019</b> &#129351; Hack&#46;lu CTF
* <b>2019</b> &#129351; RCTF 2019
* <b>2019</b> &#129351; *CTF 2019
* <b>2019</b> &#129351; Harekaze CTF
* <b>2019</b> &#129351; 0CTF/TCTF 2019
* <b>2019</b> &#129306; DEFCON 27 CTF
* <b>2018</b> &#129306; Real World CTF
* <b>2018</b> &#129351; BCTF 2018
* <b>2018</b> &#129353; Hack&#46;lu CTF
* <b>2017</b> &#129306; CodeGate CTF
* <b>2017</b> &#129351; ASIS CTF
* <b>2017</b> &#129351; BSides San Francisco CTF
* <b>2016</b> &#129352; EKOPARTY CTF
* <b>2016</b> &#129352; Silk Road CTF
* <b>2016</b> &#129352; Insomni'hack
* <b>2016</b> &#129351; ASIS CTF
* <b>2016</b> &#129351; C4CTF
* <b>2016</b> &#129351; TUCTF
* <b>2016</b> &#129351; Sharif University CTF
* <b>2016</b> &#129352; Internetwache CTF
* <b>2016</b> &#129306; PHDays VI
* <b>2015</b> &#129351; Hack Zone Tunisia
* <b>2015</b> &#129351; Break In
* <b>2015</b> &#129352; HITB CTF
* <b>2015</b> &#129306; CSAW CTF
* <b>2014</b> &#129306; CSAW CTF
* <b>2014</b> &#129306; DEFCON 22 CTF
* <b>2014</b> &#129352; Olympic Sochi CTF

### Domestic Finals

* <b>2020</b> &#129352; Whitehat Contest (COC)
* <b>2019</b> &#129351; Whitehat Contest (COC)
* <b>2018</b> &#129351; ROKA Hacking Defense Contest
* <b>2015</b> &#129351; 14th HUST Hacking Festival
* <b>2015</b> &#129351; 2015 Inc0gnito Hacking Competition

### Organizer

* <b>2021</b> Asian Cyber Security Challenge
* <b>2020</b> BingoCTF
* <b>2019</b> XCTF Finals 2019
* <b>2018</b> ASIS CTF
* <b>2016</b> KAIST & POSTECH Science War
* <b>2015</b> POSTECH & KAIST Science War
* <b>2014</b> KAIST & POSTECH Science War

</td>
<td>

## <i class="fa-solid fa-bug"></i> Advisories

### Assigned

* CVE-2021-20667
* CVE-2021-20668
* CVE-2021-20669
* CVE-2021-20670
* CVE-2021-20671
* CVE-2021-20829
* CVE-2021-29625
* CVE-2021-32407
* CVE-2021-32408
* CVE-2021-32409
* CVE-2021-41175
* CVE-2020-5631
* CVE-2020-5659
* CVE-2020-5662
* CVE-2020-5663
* CVE-2020-5640
* CVE-2020-15159
* CVE-2020-15182
* CVE-2020-15183
* CVE-2020-15188
* CVE-2020-15189
* CVE-2020-28991
* KVE-2018-0441
* KVE-2018-0449
* KVE-2018-0439
* KVE-2018-0514
* KVE-2018-0513
* KVE-2018-0438
* KVE-2018-0436
* ...

#### Others

* [git@a02ea577](https://github.com/git/git/commit/a02ea577174ab8ed18f847cf1693f213e0b9c473)

</td>

</tr>
</table>

## <i class="fa-solid fa-newspaper"></i> Patent

* KR101623096B1

<br>

<div v-if="!swarm_error">

## <i class="fa-solid fa-location-pin"></i> Last Visit

* <u>{{new Date(swarm.createdAt * 1000).toLocaleString("en-US")}}</u><br><br>
<b>{{swarm['name']}}</b><br>
<span>{{swarm.location.formattedAddress.join(",")}}</span>

<br>

<div class="map-container">
    <iframe :src="`https://maps.google.com/maps?q=${this.swarm.location.lat},${this.swarm.location.lng}&amp;hl=jp;z=14&amp;output=embed&amp;zoom=16`">
    </iframe>
    <div class="map-license">&copy; Google Maps {{new Date().getFullYear()}}</div>
</div>

</div>

<script type="module">
import { useData } from 'vitepress'

export default {
  data() {
    return {
      data: useData(),
      swarm: {'location': {}},
      swarm_error: true
    };
  },
  mounted() {
    // Dynamically load APIs
    // Return stored swarm on error
    fetch(`${this.data.theme.apiServer}/swarm`)
    .then((response) => response.json())
    .then((response) => {
      this.updateSwarm(response)
    })
    .catch((error) => {
      console.log(error)
    });
  },
  methods: {
    updateSwarm(response) {
      // Parse swarm
      this.swarm = response.checkins.items[0].venue
      this.swarm.createdAt = response.checkins.items[0].createdAt
      this.swarm_error = false
    },
  }
};
</script>
