import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { VendureEntity, DeepPartial, ProductVariant } from '@vendure/core';

/**
 * Here we define a new database entity. Passing this in to the plugin's `entities` array
 * will instruct TypeORM to create the new database table and make the entity available
 * to query in your plugin code.
 */
@Entity()
export class SalesTracker extends VendureEntity {

    constructor(input?: DeepPartial<>) {
        super(input);
    }

}
