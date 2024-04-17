import { Test, TestingModule } from '@nestjs/testing';
import { ContactsService } from '../contacts.service';
import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';
import { contactMock, contactMock2, contactsMock } from './mocks';
import { getModelToken } from '@nestjs/mongoose';

describe('ContactsService', () => {
  let service: ContactsService;
  let mockContactModel: any;

  beforeAll(async () => {
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
      providers: [
        ContactsService,
        {
          provide: getModelToken('Contact'),
          useValue: mockContactModel,
        },
      ],
    }).compile();

    service = module.get<ContactsService>(ContactsService);
  });

  describe('create', () => {
    it('should create a new contact', async () => {
      const contactDto = new CreateContactDto();
      const result = await service.create(contactDto);

      expect(mockContactModel().save).toHaveBeenCalled();
      expect(result).toEqual(contactMock);
    });
  });

  describe('findAll', () => {
    it('should return all contacts', async () => {
      const result = await service.findAll();
      expect(result).toEqual(contactsMock);
      expect(mockContactModel.find).toHaveBeenCalled();
    });
  });

  describe('update', () => {
    it('should update a contact', async () => {
      const id = '123';
      const updateContactDto = new UpdateContactDto();

      const result = await service.update(id, updateContactDto);

      expect(result).toEqual(contactMock2);
      expect(mockContactModel.findByIdAndUpdate).toHaveBeenCalledWith(
        id,
        updateContactDto,
        { new: true },
      );
    });
  });

  describe('remove', () => {
    it('should remove a contact', async () => {
      const id = '123';

      const result = await service.remove(id);

      expect(result).toEqual(contactMock2);
      expect(mockContactModel.findByIdAndDelete).toHaveBeenCalledWith(id);
    });
  });
});
