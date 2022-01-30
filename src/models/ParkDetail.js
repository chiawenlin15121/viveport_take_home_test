export default class ParkDetail {
  constructor({
    id,
    pm_name,
    pm_overview,
    pm_construction,
    pm_location,
    pm_transit
  }) {
    this.id = id
    this.title = pm_name
    this.remark = pm_construction
    this.description = pm_overview
    this.location = pm_location
    this.transit = pm_transit
  }
}