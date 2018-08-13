import {Personnage} from './partials/_personnage.js'
import {Boss} from './partials/_boss.js'
import {Archer,Guerrier,Mage} from './partials/_personnage.js'

var guerrier = new Guerrier();
var bubu = new Boss('bubu',3000,200);
var baba = new Boss('baba',3000,200);
var bobo = new Boss('bobo',3000,200);
var mage = new Mage();
var archer = new Archer();
var pvheromax = 700;
var paheromax = 500;

var tabBoss = [bubu,baba,bobo];
var tabHeros = [guerrier,archer,mage];
alert(tabBoss[i]);

var bossAleatoire = tabBoss[(Math.floor(Math.random()*(tabBoss.length - 0)))];
alert(bossAleatoire.nom);
alert('vous avez 700 pv et 500 pa a distribuer');

guerrier.nom = prompt('Comment s\'appelle ton guerrier?');
guerrier.pv = prompt('Combien de pv tu lui donnes?');
guerrier.pa = prompt('Combien de pa tu lui donnes?');


archer.nom = prompt('Comment s\'appelle ton archer?');
archer.pv = prompt('Combien de pv tu lui donnes?');
archer.pa = prompt('Combien de pa tu lui donnes?');
alert('votre archer a ' + archer.fleche + ' fleches');


mage.nom = prompt('Comment s\'appelle ton mage?');
mage.pv = pvheromax - guerrier.pv - archer.pv;
mage.pa = paheromax - guerrier.pa - archer.pa;


alert('les pv et pa du mage sont égal à :' + mage.pv + ', ' + mage.pa);
alert('votre mage a ' + mage.mana + 'de mana');

guerrier.posture = prompt('choisissez une posture pour le guerrier 1 pour attaque, 2 pour défense');
archer.posture = prompt('choisissez une posture pour l archer 1 pour attaque, 2 pour défense');
mage.posture = prompt('choisissez une posture pour le mage 1 pour attaque, 2 pour défense');

function combatPhase1(){
    
    console.log('le guerrier attaque');
    bossAleatoire.pv = bossAleatoire.pv - guerrier.pa;

    


    if(mage.mana == 0)
    {
        mage.mana += 10;
        console.log('plus de mana');

    }
    else {
        console.log('le mage attaque');
        
        mage.mana -= 10;
        if(mage.posture == 1){
            bossAleatoire.pv -= mage.pa;
        }
        else {
            bossAleatoire.pv -= mage.pa * 0.75;
        }
    }

    if(archer.fleche == 0){
        console.log('l archer n a plus de fleche');
    }
    else{
        console.log('l archer attaque');
        bossAleatoire.pv -= archer.pa;
        archer.fleche -= 1;
    }


}



