import { Module } from '@nestjs/common';
import { HttpRestModule } from '@http-rest/http-rest.module';

@Module({
  imports: [HttpRestModule]
})
export class AppModule {}
