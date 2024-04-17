import { TestingModule, Test } from '@nestjs/testing';
import { ContactsController } from '../contacts.controller';
import { ContactsService } from '../contacts.service';
import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { getModelToken } from '@nestjs/mongoose';
import { contactMock, contactMock2, contactsMock } from './mocks';

describe('ContactsController', () => {
  let controller: ContactsController;
  let service: ContactsService;
  let mockContactModel: any;

  beforeEach(async () => {
    const saveMock = jest.fn().mockResolvedValue(contactMock);
    const findMock = jest.fn().mockResolvedValue(contactsMock);
    const findByIdAndUpdateMock = jest.fn().mockResolvedValue(contactMock2);
    const findByIdAndDeleteMock = jest.fn().mockResolvedValue(contactMock2);

    mockContactModel = jest.fn().mockImplementation(() => ({
      save: saveMock,
    }));

    mockContactModel.find = findMock;
    mockContactModel.findByIdAndUpdate = findByIdAndUpdateMock;
    mockContactModel.findByIdAndDelete = findByIdAndDeleteMock;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactsController],
      providers: [
        ContactsService,
        {
          provide: getModelToken('Contact'),
          useValue: mockContactModel,
        },
      ],
    }).compile();

    controller = module.get<ContactsController>(ContactsController);
    service = module.get<ContactsService>(ContactsService);
  });

  describe('create', () => {
    it('should create a new contact', () => {
      const createContactDto = new CreateContactDto();
      createContactDto.firstname = 'John';
      createContactDto.lastname = 'Doe';
      createContactDto.email = 'john.doe@example.com';

      const result = controller.create(createContactDto);

      expect(result).toEqual(service.create(createContactDto));
    });
  });

  describe('findAll', () => {
    it('should return an array of all contacts', () => {
      const result = controller.findAll();

      expect(result).toEqual(service.findAll());
    });
  });

  describe('update', () => {
    it('should update a contact', () => {
      const id = '123';
      const updateContactDto = new UpdateContactDto();
      updateContactDto.firstname = 'Jane';

      const result = controller.update(id, updateContactDto);

      expect(result).toEqual(service.update(id, updateContactDto));
    });
  });

  describe('remove', () => {
    it('should remove a contact', () => {
      const id = '123';

      const result = controller.remove(id);

      expect(result).toEqual(service.remove(id));
    });
  });
});
