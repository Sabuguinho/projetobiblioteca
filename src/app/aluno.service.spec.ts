import { TestBed, inject } from '@angular/core/testing';
import { AlunoService } from './service/aluno.service';



describe('AlunoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlunoService]
    });
  });

  it('should be created', inject([AlunoService], (service: AlunoService) => {
    expect(service).toBeTruthy();
  }));
});
