import { Context } from "@foal/core";
import { ApiInfo, ApiServer, controller, UseSessions } from "@foal/core";
import { fetchUser } from "@foal/typeorm";
import { User } from "../entities";
import { AuthController, ProfileController, StoriesController } from "./api";

@ApiInfo({
  title: "Application API",
  version: "1.0.0",
})
@ApiServer({
  url: "/api",
})
@UseSessions({
  cookie: true,
  user: fetchUser(User),
  userCookie: (ctx: Context<User | undefined>) =>
    ctx.user ? JSON.stringify({ id: ctx.user.id, name: ctx.user.name }) : "",
})
export class ApiController {
  subControllers = [
    controller("/stories", StoriesController),
    controller("/auth", AuthController),
    controller("/profile", ProfileController),
  ];
}
