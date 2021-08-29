import {MigrationInterface, QueryRunner} from "typeorm";

export class migration1630241036718 implements MigrationInterface {
    name = 'migration1630241036718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `avatar` varchar(255) NOT NULL, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `sessions` (`id` varchar(44) NOT NULL, `user_id` int NULL, `content` text NOT NULL, `flash` text NOT NULL, `updated_at` int NOT NULL, `created_at` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `story` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(255) NOT NULL, `link` varchar(255) NOT NULL, `authorId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `story` ADD CONSTRAINT `FK_deb112632d0b5be276f59287d99` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `story` DROP FOREIGN KEY `FK_deb112632d0b5be276f59287d99`");
        await queryRunner.query("DROP TABLE `story`");
        await queryRunner.query("DROP TABLE `sessions`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
