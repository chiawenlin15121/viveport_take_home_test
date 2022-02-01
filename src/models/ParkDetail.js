export default class ParkDetail {
  constructor({
    id,
    pm_name,
    pm_overview,
    pm_construction,
    pm_location,
    pm_transit,
    pm_lon,
    pm_lat,
  }) {
    this.id = id
    this.title = pm_name
    this.remark = pm_construction
    this.description = pm_overview
    this.location = pm_location
    this.transit = pm_transit
    this.longitude = pm_lon
    this.latitude = pm_lat
  }
}