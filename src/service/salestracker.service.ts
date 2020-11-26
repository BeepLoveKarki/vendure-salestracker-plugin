import { Injectable, Inject } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { SalesTracker } from '../entities/salestracker.entity';
import { PLUGIN_INIT_OPTIONS } from '../constants';
import { PluginInitOptions } from '../types';

@Injectable()
export class SalesTrackerService {

    constructor(@InjectConnection() private connection: Connection,
                @Inject(PLUGIN_INIT_OPTIONS) private options: PluginInitOptions) {}

}
