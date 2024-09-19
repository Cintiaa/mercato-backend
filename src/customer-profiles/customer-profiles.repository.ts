import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CustomerProfile } from "./entities/customer-profile.entity";
import { Repository } from "typeorm";

@Injectable()
export class CustomerProfilesRepository {
  constructor(
    @InjectRepository(CustomerProfile)
    private readonly typeOrmRepo: Repository<CustomerProfile>
  ) {}

  async create(customerProfile: CustomerProfile): Promise<CustomerProfile> {
    return this.typeOrmRepo.save(customerProfile);
  }

  async findAll(): Promise<CustomerProfile[]> {
    return this.typeOrmRepo.find();
  }

  async findById(id: number): Promise<CustomerProfile | null> {
    return this.typeOrmRepo.findOne({ where: { id } });
  }
}
