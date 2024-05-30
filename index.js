#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function wellcome() {
    let ranbowTitle = chalkAnimation.rainbow(`let's start ADVENTUREGAME hello `);
    await sleep();
    ranbowTitle.replace(`with NODE .JS INQUIRER and CHALK`);
    await sleep();
    ranbowTitle.replace(`let enjoy ADVENTUREGAME !!!`);
    await sleep();
    ranbowTitle.stop();
    let pulseTitle = chalkAnimation.pulse(`Developed by ASSAD AWAN fro TypeScript....`);
    await sleep();
    pulseTitle.stop();
}
wellcome();
// Class Player &&  Opponet
class Player {
    name;
    power = 100;
    constructor(name) {
        this.name = name;
    }
    fuellDecrease() {
        let power = this.power - 25;
        this.power = power;
    }
    fuelIncrease() {
        this.power = 100;
    }
}
class Opponent {
    name;
    power = 100;
    constructor(name) {
        this.name = name;
    }
    fuellDecrease() {
        let power = this.power - 25;
        this.power = power;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Player Name :"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: [(chalk.bold.green("SKELETON")), (chalk.bold.yellow("ZOMBLIE")), (chalk.bold.blue("ASSASSION"))]
});
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    // skeleton
    if (opponent.select == (chalk.bold.green("SKELETON"))) {
        let ask = await inquirer.prompt({
            type: "list",
            name: "open",
            message: "Select Your Opponent",
            choices: ["ATTACK", "BANDAGE", "RUN"]
        });
        if (ask.open == "ATTACK") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuellDecrease();
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`));
                console.log(chalk.bold.green(`${o1.name} power is ${o1.power}`));
                if (p1.power <= 0) {
                    console.log(chalk.bold.green.italic(`GAME OVER ${o1.name} HAS WIN! `));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuellDecrease();
                console.log(chalk.bold.green(`${o1.name} power is ${o1.power}`));
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`));
                if (o1.power <= 0) {
                    console.log(chalk.bold.red.italic(`GAME OVER ${p1.name} HAS WIN!`));
                    process.exit();
                }
            }
        }
        if (ask.open == "BANDAGE") {
            p1.fuelIncrease();
            console.log(chalk.bold.yellow.italic(`You Health Your power is ${p1.power}`));
        }
        if (ask.open == "RUN") {
            console.log(chalk.bold.cyan.italic(`You loose,Better Luck Next Time`));
            process.exit();
        }
    }
    if (opponent.select == (chalk.bold.yellow("ZOMBLIE"))) {
        let ask = await inquirer.prompt({
            type: "list",
            name: "open",
            message: "Select Your Opponent",
            choices: ["ATTACK", "BANDAGE", "RUN"]
        });
        if (ask.open == "ATTACK") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuellDecrease();
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`));
                console.log(chalk.bold.yellow(`${o1.name} power is ${o1.power}`));
                if (p1.power <= 0) {
                    console.log(chalk.bold.yellow.italic(`GAME OVER ${o1.name} HAS WIN!`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuellDecrease();
                console.log(chalk.bold.yellow(`${o1.name} power is ${o1.power}`));
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`));
                if (o1.power <= 0) {
                    console.log(chalk.bold.red.italic(`GAME OVER ${p1.name} HAS WIN!`));
                    process.exit();
                }
            }
        }
        if (ask.open == "BANDAGE") {
            p1.fuelIncrease();
            console.log(chalk.bold.cyan.italic(`You Health Your power is ${p1.power}`));
        }
        if (ask.open == "RUN") {
            console.log(chalk.bold.gray.italic(`You loose,Better Luck Next Time`));
            process.exit();
        }
    }
    if (opponent.select == (chalk.bold.blue("ASSASSION"))) {
        let ask = await inquirer.prompt({
            type: "list",
            name: "open",
            message: "Select Your Opponent",
            choices: ["ATTACK", "BANDAGE", "RUN"]
        });
        if (ask.open == "ATTACK") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuellDecrease();
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`));
                console.log(chalk.bold.yellow(`${o1.name} power is ${o1.power}`));
                if (p1.power <= 0) {
                    console.log(chalk.bold.yellow.italic(`GAME OVER ${o1.name} HAS WIN!`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuellDecrease();
                console.log(chalk.bold.yellow(`${o1.name} power is ${o1.power}`));
                console.log(chalk.bold.red(`${p1.name} power is ${p1.power}`));
                if (o1.power <= 0) {
                    console.log(chalk.bold.red.italic(`GAME OVER ${p1.name} HAS WIN!`));
                    process.exit();
                }
            }
        }
        if (ask.open == "BANDAGE") {
            p1.fuelIncrease();
            console.log(chalk.bold.cyan.italic(`You Health Your power is ${p1.power}`));
        }
        if (ask.open == "RUN") {
            console.log(chalk.bold.gray.italic(`You loose,Better Luck Next Time`));
            process.exit();
        }
    }
} while (true);
