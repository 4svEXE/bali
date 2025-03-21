import { CommonModule } from '@angular/common';
import { FavoriteService } from '../../features/favorite/favorite.service';
import { ProductService } from './../../entities/product/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IProduct } from '../../entities/product/product.model';
import { Subscription } from 'rxjs';
import { ProductCardComponent } from '../../features/catalog/product-card/product-card.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  imports: [CommonModule, ProductCardComponent]
})
export class FavoritesComponent implements OnInit, OnDestroy {
  favoriteProducts: IProduct[] = [];
  private sub!: Subscription;

  constructor(
    private favoriteService: FavoriteService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.sub = this.favoriteService.favorites$.subscribe((favoriteIds) => {
      this.productService.getProducts().subscribe((products) => {
        this.favoriteProducts = products.filter((product) =>
          favoriteIds.includes(product.id)
        );
      });
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
