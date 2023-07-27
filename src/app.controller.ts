import { Body, Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render(`index.html`)
  home(@Req() request) {
    let logged = '';
    if(request?.cookies['contelli-web-admin'] === 'logado'){
      logged = 'logado'
    }
    return { client: null, cookie: null, logged }
  }

  @Get('cadastro')
  @Render(`cadastro.html`)
  cadastro(@Req() request, @Res({ passthrough: true }) response) {

    if (request?.cookies['contelli-web-admin'] === 'logado') {
      return { logged: 'logado' }
    } else {
      response.writeHead(301, {
        Location: `http://localhost:3000`
      }).end();
      return { logged: false }
    }

  }

  @Get('login')
  @Render(`login.html`)
  login() {
    return {}
  }

  @Get('sucesso')
  @Render(`sucesso.html`)
  success() {
    return {}
  }
}
