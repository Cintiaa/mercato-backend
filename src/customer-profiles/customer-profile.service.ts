import { Injectable } from "@nestjs/common";
import { CreateCustomerProfileDto } from "./dto/create-customer-profile.dto";
import { UpdateCustomerProfileDto } from "./dto/update-customer-profile.dto";
import { CustomerProfilesRepository } from "./customer-profiles.repository";

@Injectable()
export class CustomerProfilesService {
  constructor(
    private readonly customerProfileRepository: CustomerProfilesRepository
  ) {}
  create(createCustomerProfileDto: CreateCustomerProfileDto) {
    return "This action adds a new customerProfile";
  }

  findAll() {
    return this.customerProfileRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} customerProfile`;
  }

  update(id: number, updateCustomerProfileDto: UpdateCustomerProfileDto) {
    return `This action updates a #${id} customerProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerProfile`;
  }
}
