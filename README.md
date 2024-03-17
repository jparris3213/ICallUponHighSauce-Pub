# ICallUponHighSauce

A Puppeteer-driven test suite for the mylarp system, currently tuned to Shadowmoor LARP of 2024

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. This is not intended for live hosting.

### Prerequisites

The things you need before installing the software.

* Node.js 18.14+
* npm 9.3.1+
* cmd-env (once node is installed, type $npm install env-cmd)
* basic node and javascript knowledge to adjust tests and implement Environmental Variables

### Installation

A step by step guide that will tell you how to get the development environment up and running.

``` bash
mkdir /config
cd /config
touch dev.env
```

* At this point create the following two variables in dev.env

``` bash
    SITE_USERNAME= <your username>
    SITE_PASS= <your password>
```

* Once that's saved, run the tests listed in index.js (DEFAULT:EVERYTHING)

``` bash

npm dev

```

* Enjoy

## Usage

Below is a List of each test that is listed to be ran automatically

``` bash

Dark Fae Scholar - name:"ADarkOvercaster" testfile_name:test-darkfae.js function_name:dark_overcaster
Reaver Templar - name:"AReaverTemp" testfile_name:test-reavertemp.js function_name:reavertemp
Bright Fae Scholar - name:"ABrightCaster" testfile_name:test-reavertemp.js function_name:bright_overcaster
Barbarian(Human) / Warrior - name:"ABarWarrior" testfile_name:test-barwar.js function_name:abarwar
Barbarian(Human) / Templar - name:"ABarLar" testfile_name:test-bartemp.js function_name:abartemp
Barbarian(Human) / Rogue - name:"ABarThief" testfile_name:test-barrogue.js function_name:abarthief
Barbarian(Human) / Scholar - name:"ABarSchool" testfile_name:test-barscholar.js function_name:abarschol
Barbarian(Human) / Oracle - name:"ABarOracle" testfile_name:test-baracle.js function_name:abaracle


```

Template:

``` bash
<Ancestry / Class> - name:"AAncestryClass" testfile_name:test-ancestryclass.js function_name:function_name
```

### Branches

* Master: main
* Feature: testingbranch101
* Bugfix: buggy

## Additional Documentation and Acknowledgments

* [CSS Selector List for Ancestry, Class, and Skills](https://docs.google.com/spreadsheets/d/1g1_s7Wy2Dd604DlMcUd_rsMp75aKxqv_wSdmCpvUIII/edit?usp=sharing)
* [MyLARP Shadowmoor Link](https://shadowmoor.mylarp.dev/)
* [Shadowmoor Skill Breakdown Chart](https://docs.google.com/spreadsheets/d/19Vq0-JbdAZzuhM6E45iIhBGs5RF6qe7EL_8rzh3mDuU/edit?usp=sharing)
