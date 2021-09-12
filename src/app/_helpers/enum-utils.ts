import {OrderModalType} from '../enum/order-modal-type';

export class EnumUtils {

  public static isEditMode(orderModalType: OrderModalType): boolean {
    return orderModalType === OrderModalType.EDIT;
  }

  public static isSellMode(orderModalType: OrderModalType): boolean {
    return orderModalType === OrderModalType.SELL;
  }

  public static isBuyMode(orderModalType: OrderModalType): boolean {
    return orderModalType === OrderModalType.BUY;
  }
}
