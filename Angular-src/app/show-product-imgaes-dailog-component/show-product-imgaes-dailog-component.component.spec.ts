import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductImgaesDailogComponentComponent } from './show-product-imgaes-dailog-component.component';

describe('ShowProductImgaesDailogComponentComponent', () => {
  let component: ShowProductImgaesDailogComponentComponent;
  let fixture: ComponentFixture<ShowProductImgaesDailogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowProductImgaesDailogComponentComponent]
    });
    fixture = TestBed.createComponent(ShowProductImgaesDailogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
