import {
  Entity,
  JoinColumn,
  ManyToOne,
  Column,
  PrimaryGeneratedColumn
} from 'typeorm';
import { User } from './User.entity';
@Entity({ name: 'posts' })
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  content: string;

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
