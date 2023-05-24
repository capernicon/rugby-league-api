import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthenticationModule],
})

export class AppModule {}
