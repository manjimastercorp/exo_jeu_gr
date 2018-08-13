export class Personnage {
    constructor(nom,pv,pa){
        this.nom=nom;
        this.pv=pv;
        this.pa=pa;
        this.posture=0;
    }
}
export class Guerrier extends Personnage {
    constructor(nom,pv,pa){
        super(nom,pv,pa);
        this.rage = 0;
    }
}
export class Mage extends Personnage {
    constructor(nom,pv,pa){
        super(nom,pv,pa);
        this.mana = 100;
    }
}

export class Archer extends Personnage {
    constructor(nom,pv,pa){
        super(nom,pv,pa);
        this.fleche = Math.floor((Math.random()*(15-5)+5));
    }
}