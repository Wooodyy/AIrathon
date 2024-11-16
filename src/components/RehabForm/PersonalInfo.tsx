import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function PersonalInfo({ formData, setFormData }: any) {
  return (
    <Card className="form-card">
      <CardHeader className="p-4">
        <CardTitle className="text-2xl font-semibold">1. Личная информация</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <div className="form-section">
          <Label htmlFor="name">Имя</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="form-input"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="form-section">
            <Label htmlFor="age">Возраст</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="form-input"
            />
          </div>
          
          <div className="form-section">
            <Label htmlFor="gender">Пол</Label>
            <Select
              value={formData.gender}
              onValueChange={(value) => setFormData({ ...formData, gender: value })}
            >
              <SelectTrigger id="gender" className="form-input">
                <SelectValue placeholder="Выберите" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Мужской</SelectItem>
                <SelectItem value="female">Женский</SelectItem>
                <SelectItem value="other">Другой</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-section">
            <Label htmlFor="height">Рост (см)</Label>
            <Input
              id="height"
              type="number"
              value={formData.height}
              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
              className="form-input"
            />
          </div>
          
          <div className="form-section">
            <Label htmlFor="weight">Вес (кг)</Label>
            <Input
              id="weight"
              type="number"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
              className="form-input"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}