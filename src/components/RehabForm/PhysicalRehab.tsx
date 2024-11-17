import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";

export function PhysicalRehab({ formData, setFormData }: any) {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Физическая реабилитация</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="space-y-2">
          <Label>Оценка физической формы (0-10)</Label>
          <Slider
            value={[formData.physicalState]}
            onValueChange={(value) => setFormData({ ...formData, physicalState: value[0] })}
            max={10}
            step={1}
          />
          <div className="text-right text-sm text-muted-foreground">
            {formData.physicalState}/10
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Используемое оборудование</Label>
          <Input
            value={formData.equipment}
            onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
            placeholder="Например: трости, инвалидные коляски"
          />
        </div>

        <div className="grid gap-2">
          <Label>Цели реабилитации</Label>
          <Textarea
            value={formData.rehabGoals}
            onChange={(e) => setFormData({ ...formData, rehabGoals: e.target.value })}
            placeholder="Опишите, чего хотите достичь"
          />
        </div>

        <div className="grid gap-2">
          <Label>Время на физическую активность (минут в день)</Label>
          <Input
            type="number"
            value={formData.activityTime}
            onChange={(e) => setFormData({ ...formData, activityTime: e.target.value })}
            placeholder="Например: 30"
          />
        </div>
      </CardContent>
    </Card>
  );
}