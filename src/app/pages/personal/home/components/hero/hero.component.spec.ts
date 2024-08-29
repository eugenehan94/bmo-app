import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { PersonalHomeModule } from '../../home.module';
//ngrx
import { StoreModule } from '@ngrx/store';
import { ScreenSizeReducer } from '../../../../../store/app/reducers/app.reducer';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Personal home hero component', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  //compileComponents is asynchronous, it uses the waitForAsync
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        PersonalHomeModule,
        HttpClientTestingModule,
        StoreModule.forRoot(ScreenSizeReducer),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the hero component', () => {
    expect(component).toBeDefined();
  });

  it('initially, currentScreenSize property is undefined', () => {
    expect(component.currentScreenSize).toBeUndefined();
  });
});
