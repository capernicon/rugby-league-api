import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                database: configService.get<string>('MYSQL_DATABASE'),
                host: configService.get<string>('MYSQL_HOST'),
                port: configService.get<number>('PORT'),
                username: configService.get<string>('MYSQL_USER'),
                password: configService.get<string>('MYSQL_PASSWORD'),
                entities: [__dirname  + '/../**/*.entity.{js,ts}'],
                synchronize: true
            })
        })
    ]
})

export class DataseModule {}