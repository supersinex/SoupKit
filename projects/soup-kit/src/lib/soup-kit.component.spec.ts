import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SoupKitComponent } from './soup-kit.component';

describe('SoupKitComponent', () => {
  let component: SoupKitComponent;
  let fixture: ComponentFixture<SoupKitComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SoupKitComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoupKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
