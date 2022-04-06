import { InvestmentRange } from "./investmentRange";
import { InvestmentType } from "./investmentType";

export interface InvestmentFilters {
    investmentTypes: InvestmentType[],
    investmentrange: InvestmentRange;
}