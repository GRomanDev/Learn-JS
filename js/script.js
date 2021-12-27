'use strict';

class Muscle {
    constructor(name, origin, insertion) {
        this.name = name;
        this._origin = origin;
        this._insertion = insertion;
    }

    showData = () => {
        console.log(`мышца ${this.name} имеет начало: ${this._origin}  и прикрепление: ${this._insertion}`);
    }

    get origin() {
        return this._origin;
    }

    set origin(origin) {
        this._origin = origin;
    }
}

const gastrocnemius = new Muscle('gastrocnemius', 'femur', 'tibia');

gastrocnemius.showData();

gastrocnemius.origin = 'os femur';

gastrocnemius.insertion = 'os tibia';

console.log(gastrocnemius.insertion);
gastrocnemius.showData();