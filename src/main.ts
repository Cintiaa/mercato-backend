import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

const { PORT } = Bun.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 
  const config = new DocumentBuilder()
    .setTitle("Mercato")
    .setDescription("The mercato API description")
    .setVersion("1.0")
    .addTag("mercato")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT || 3000);
}

console.log(`Listen on http://localhost:${PORT} ...`);

bootstrap();
