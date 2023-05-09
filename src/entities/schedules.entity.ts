import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./users.entity";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;

  @ManyToOne(() => User)
  user: User;
}

export { Schedule };
