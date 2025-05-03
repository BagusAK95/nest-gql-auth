import { Injectable } from "@nestjs/common";
import * as KratosClient from "@ory/kratos-client";

@Injectable()
export class KratosService {
  private readonly kratos: KratosClient.FrontendApi

  constructor() {
    const config = new KratosClient.Configuration({
      basePath: process.env.KRATOS_BASE_URL
    })

    this.kratos = new KratosClient.FrontendApi(config)
  }

  async passwordLogin(identifier: string, password: string): Promise<KratosClient.SuccessfulNativeLogin> {
    try {
      const flow = await this.kratos.createNativeLoginFlow()

      const login = await this.kratos.updateLoginFlow({
        flow: flow.data.id,
        updateLoginFlowBody: {
          method: "password",
          identifier,
          password,
        }
      })
  
      return login.data
    } catch (error) {
      throw new Error(error.response.data.ui.messages[0].text)
    }
  }
}